module Api::V1
  class UsersController < ApplicationController

      def index
         allUsers = User.all
         render json: allUsers
      end

      def show
          @user = User.find_by(id: params[:id])
          render json: @user
      end

      def create
          user = User.create(user_params)
          if user.valid?
              render json: user
          else
              render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
      end

      private

      def user_params
          params.permit(:first_name, :last_name, :username, :password)
      end
  end
end
