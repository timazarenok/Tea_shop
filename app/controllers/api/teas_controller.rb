module Api
  class TeasController < ApplicationController
    protect_from_forgery with: :null_session

    def index
      teas = Tea.all

      render json: TeaSerializer.new(teas, options).serialized_json
    end

    def show
      tea = Tea.find(params[:id])

      render json: TeaSerializer.new(tea, options).serialized_json 
    end

    def create
      tea = Tea.new(tea_params)

      if tea.save
        render json: TeaSerializer.new(tea).serialized_json
      else
        render json: { error: tea.errors.messages }, status: 422
      end
    end

    def update
      tea = Tea.find(params[:id])

      if tea.update(tea_params)
        render json: TeaSerializer.new(tea, options).serialized_json
      else
        render json: { error: tea.errors.messages }, status: 422
      end
    end

    def destroy
      tea = Tea.find(params[:id])

      if tea.destroy
        teas = Tea.all

        render json: TeaSerializer.new(teas, options).serialized_json
      else
        render json: { error: tea.errors.messages }, status: 422
      end
    end

    private

    def tea_params
      params.require(:tea).permit(:image, :name, :description, :price)
    end

    def options
      @options ||= { include: %i[reviews ingredients] }
    end
  end
end