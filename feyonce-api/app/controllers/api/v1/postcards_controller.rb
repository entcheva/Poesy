module Api::V1
  class AlbumsController < ApplicationController
    def index
      @postcards = Postcard.all
      render json: @postcards
    end

    def show
      @postcard = Postcard.find(params[:id])
      render json: @postcard
    end

    def create
      @postcard = Postcard.create(postcard_params)
      render json: @postcard
    end

    private
    def postcard_params
      params.require(:postcard).permit(:poem, :image_url)
    end
  end
end
