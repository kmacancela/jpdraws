module Api::V1
  class LoginController < ApplicationController
      def create
          user = User.find_by("lower(username) = ?", params[:username].downcase)
          if user && user.authenticate(params[:password])
            render json: { token: create_token(user.id), user_id: user.id }
          else
            render json: { errors: [ "Sorry, we couldn't find that user in our database." ] }, status: :unprocessable_entity
          end
      end
  end
end
