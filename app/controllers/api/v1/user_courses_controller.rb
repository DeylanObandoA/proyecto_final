class Api::V1::UserCoursesController < ApplicationController
    before_action :set_user_course, only: %i[show edit update destroy]

    def index
        @user_courses = UserCourse.all
        render json: @user_courses
    end

    def show;end

    def new
        @user_course = UserCourse.new
    end

    def edit;end

    def create
        @user_course = UserCourse.new(user_course_params)

        if @user_course.save
            render json: @user_course, status: :created
        else
            render json: { errors: @user_course.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        if @user_course.update(user_course_params)
            render json: @user_course, status: :ok
        else
            render json: { errors: @user_course.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @user_course.destroy

        render json: { message: "UserCourse was successfully destroyed." }, status: :ok
    end

    private

    def set_user_course
        @user_course = UserCourse.find(params[:id])
    end

    def user_course_params
        params.require(:user_course).permit(:user_id, :course_id)
    end
end