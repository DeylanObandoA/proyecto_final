class Api::V1::UsersController < ApplicationController
  before_action :some_method_before_index, only: [:index]
  before_action :set_user, only: %i[show edit update destroy make_admin remove_admin]
  respond_to :json

  def index
  @users= User.all
  render json: @users 
  end
  
  def options
    head :ok
  end
  
  def show;end 
  
  def edit;end 

  def new
    @user = User.new
  end

  def create 
  @user = User.new(user_params)

    respond_to do |format|
      if @user.save
        format.html { redirect_to user_url(@user), notice: "User was successfully created." }
        format.json { render :show, status: :created, location: @user }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    if @user.update(user_params)
        render json: @user, status: :ok
    else
        render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
end

  def destroy
    @user.destroy

    render json: { message: "user was successfully destroyed." }, status: :ok
  end

  def some_method_before_index;end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:name, :birthdate, :email, :password)
  end

  # def make_admin
  #     user = User.find(params[:id])
  #     user.add_role(:admin)
  #     render json: @users, notice: 'Usuario actualizado exitosamente.' 
  # end

  # def remove_admin
  #   user = User.find(params[:id])
  #   user.remove_role(:admin)
  #   render json: @users, notice: 'Usuario actualizado exitosamente.'
  # end

end