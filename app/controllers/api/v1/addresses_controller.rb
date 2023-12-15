class Api::V1::AddressesController < ApplicationController
  before_action :set_addresses, only: %i[show edit update destroy]

  def index
    @addresses = Address.all
    render json: @addresses
  end

  def show
    render json: @address
  end

  def new
    @address = Address.new
  end

  def edit; end

  def create
    @address = Address.create(addresses_params)

    if @address.save
      render json: @address, status: :created
    else
      render json: { errors: @address.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @address.update(addresses_params)
      render json: @address, status: :ok
    else
      render json: { errors: @address.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @address.destroy

    render json: { message: "Address was successfully destroyed." }, status: :ok
  end

  private

  def set_addresses
    begin
      @address = Address.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Address not found' }, status: :not_found
    rescue StandardError => e
      render json: { error: "An error occurred: #{e.message}" }, status: :internal_server_error
    end
  end

  def addresses_params
    params.require(:address).permit(:province, :canton, :district, :neighborhood, :zip_code)
  end
end
