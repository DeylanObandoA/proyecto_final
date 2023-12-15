class Users::SessionsController < Devise::SessionsController

  before_action :configure_sign_in_params, only: [:create]
  respond_to :json

  # GET /resource/sign_in
  def new
    super
  end

  # POST /resource/sign_in
  def create
    puts "++++++++++++++++++ estoy aqui "
    super do |user|
      if user.persisted?
        token = JWT.encode({ user_id: user.id }, 'your_secret_key', 'HS256')
        render json: { token: token, user: user }
      else
        render json: { error: 'Credenciales inválidas' }, status: :unauthorized
      end
    end
  end

  # DELETE /resource/sign_out
  def destroy
    super
    render json: { message: 'Logged out successfully.' }
  end

  private
  def respond_with(resource, _opts = {})
    render json: resource
  end
  
  
  def respond_to_on_destroy
    render json: { message: "Logged out." }
  end

  protected

  # # If you have extra params to permit, append them to the sanitizer.
  def configure_sign_in_params
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :email, :password, :birthdate])
  end
  
end