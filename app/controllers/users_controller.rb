class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index 
        users = User.all 
        render json: users
        # @users = User.all 
        # if @user 
        #     render json: {
        #         users: @users
        #     }
        # else
        #     render json: {
        #         status: 500,
        #         errors: ['no users found']
        #     }
        # end
    end

    def show 
        user = User.find(params[:id])
        render json: user

        # @user = User.new(user_require_params)
        # if @user.save 
        #     login! 
        #     render json: {
        #         status: :created, 
        #         user: @user
        #     }
        # else
        #     render json: {
        #         status: 500,
        #         errors: @user.errors.full_messages
        #     }
        # end
    end

    # def create 
    #     user = User.create!(user_params)
    #     render json: user, status: :created
    # end

    # def destroy 
    #     user = User.find(params[:id])
    #     user.destroy
    #     head :no_content
    # end

    private 

    def user_params 
        params.permit(:name, :profile_img, :password, :password_confirmation)
    end

    def user_require_params
        params.require(:user).permit(:name, :profile_img,:username, :password, :password_confirmation)
    end

    def render_unprocessable_entity_response(exception) 
        render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response 
        render json: {error: "User Not Found"}, status: :not_found
    end

end
