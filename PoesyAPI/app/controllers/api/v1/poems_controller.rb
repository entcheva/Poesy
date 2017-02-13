module Api::V1
  class PoemsController < ApplicationController
    def index
      @poems = Poem.all
      render json: @poems
    end

    def show
      @poem = Poem.find(params[:id])
      render json: @poem
    end

    def create
      @poem = Poem.create(poem_params)
      render json: @poem
    end

    private
    def poem_params
      params.require(:poem).permit(:poem_text)
    end
  end
end
