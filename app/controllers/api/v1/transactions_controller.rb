module Api::V1
  class TransactionsController < ApplicationController

      def index
          allTransactions = Transaction.all
          render json: allTransactions
      end

      def show
          @transaction = Transaction.find_by(id: params[:id])
          render json: @transaction
      end

      def create
          transaction = Transaction.create(transaction_params)
          if transaction.valid?
              render json: transaction
          else
              render json: { errors: transaction.errors.full_messages }, status: :unprocessable_entity
          end
      end

      private

      def transaction_params
          params.permit(:user_id, :drawing_id)
      end
  end
end
