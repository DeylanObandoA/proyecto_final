class Api::V1::CoursesController < ApplicationController
  before_action :set_course, only: %i[show edit update destroy addresses]

  def index
    @courses = Course.all
    # .paginate(page: params[:page], per_page: 12)
    render json: @courses
  end

  def show
    @course = Course.find(params[:id])
  
    if @course
      render json: {
        course: @course,
        institution_name: @course.institution&.name,
        branches: @course.branches.map { |branch| branch.name },
        categories: @course.categories,
        addresses: @course.branches.map { |branch| branch.address }
      }
    else
      render json: { error: 'Course not found' }, status: :not_found
    end
  end

  def addresses
    # Lógica para obtener direcciones específicas del curso
    if @course
      @addresses = @course.branches.flat_map { |branch| branch.address }
      render json: @addresses
    else
      render json: { error: 'Course not found' }, status: :not_found
    end
  end

  def branches
    # logica para obtener el branch con addreses
    course = Course.find(params[:id])
    branches = course.branches.includes(:address)

    render json: branches.as_json(include: { address: { only: [:province, :canton, :district, :neighborhood, :zip_code] } })
  end

  def new
    @course = Course.new
  end

  def edit; end

def create
  @course = Course.new(course_params)

  if @course.save
    render json: @course, status: :created
  else
    Rails.logger.error("Course creation failed. Errors: #{@course.errors.full_messages}")
    render json: { errors: @course.errors.full_messages }, status: :unprocessable_entity
  end
end

  def update
    if @course.update(course_params)
      render json: @course, status: :ok
    else
      render json: { errors: @course.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @course.destroy
    render json: { message: "Course was successfully destroyed." }, status: :ok
  end

  private

  def set_course
      @course = Course.find(params[:id])
  end

  def course_params
    params.require(:course).permit(:name, :description, :registration_day, :institution_id, :requirement, :favorite)
  end
end
