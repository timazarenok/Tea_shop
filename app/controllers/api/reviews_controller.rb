module Api 
  class ReviewsController < ApplicationController
    protect_from_forgery with: :null_session

    def create
      review = tea.reviews.new(review_params)
    
      if review.save
        render json: ReviewSerializer.new(review).serialized_json
      else
        render json: { error: review.errors.messages }, status: 422
      end
    end
  
    def destroy
      review = Review.find(params[:id])
    
      if review.destroy
        head :no_content
      else
        render json: { error: review.errors.messages }, status: 422
      end
    end
  
    private

    def tea
      @tea ||= Tea.find(params[:tea_id])  
    end
  
    def review_params
      params.require(:review).permit(:name, :score, :description, :tea_id)
    end
  end
end