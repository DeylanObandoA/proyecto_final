class Api::V1::InstitutionsController <  ApplicationController
  before_action :set_institution, only: %i[show edit update destroy]

  def index
    @institutions = Institution.all
    render json: @institutions
  end

    def show
      @institution = Institution.find(params[:id])
      render json: @institution
    end


  def new
    @institution = Institution.new
  end

  def edit; end


  def create
    @institution = Institution.new(institution_params)

    if @institution.save
        render json: @institution, status: :created
    else
        render json: { errors: @institution.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
      if @institution.update(institution_params)
          render json: @institution, status: :ok
      else
          render json: { errors: @institution.errors.full_messages }, status: :unprocessable_entity
      end
  end

  def destroy
    @institution.destroy

    render json: { message: "institution was successfully destroyed." }, status: :ok
  end
  
  private
  
  def set_institution
    @institution = Institution.find(params[:id])
  end

  
  def institution_params
      params.require(:institution).permit(:name, :insti_type)
  
  end
end