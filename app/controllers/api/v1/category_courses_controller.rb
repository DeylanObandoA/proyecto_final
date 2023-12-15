class Api::V1::CategoryCoursesController < ApplicationController
  before_action :set_category_course, only: %i[show edit update destroy]

  def index
    @category_courses = CategoryCourse.all
    render json: @category_courses
  end

  def show
    # Your code for showing a specific category_course
  end

  def new
    @category_course = CategoryCourse.new
  end

  def edit
    # Your code for editing a category_course
  end
def create
  # Other code...

  @category_course = CategoryCourse.new(category_course_params)

  if category_course.valid?
    category_course.save
    render json: category_course, status: :created
  else
    render json: { error: category_course.errors.full_messages }, status: :unprocessable_entity
  end
end

  def update
    if @category_course.update(category_course_params)
      render json: @category_course, status: :ok
    else
      render json: { errors: @category_course.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @category_course.destroy

    render json: { message: "CategoryCourse was successfully destroyed." }, status: :ok
  end

  private

  def set_category_course
    @category_course = CategoryCourse.find(params[:id])
  end

  def category_course_params
    params.require(:category_course).permit(:course_id, :category_id)
  end
end
