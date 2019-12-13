module Api::V1
  class DrawingsController < ApplicationController

      def index
          allDrawings = Drawing.all
          render json: allDrawings
      end

      def show
          @drawing = Drawing.find_by(id: params[:id])
          render json: @drawing
      end

      def create
          drawing = Drawing.create(drawing_params)
          if drawing.valid?
              render json: drawing
          else
              render json: { errors: drawing.errors.full_messages }, status: :unprocessable_entity
          end
      end

      private

      def drawing_params
          params.permit(:name, :img, :price)
      end
  end
end
