class Api::V1::CharactersController < ApplicationController

    include ActionController::MimeResponds
    before_action :find_character, only: [:show, :update, :destroy]

    def index

        @characters = Character.all

        render json: @characters

        # respond_to do |format|
        #     format.html do
        #         render html: @characters
        #     end
        #     format.json do
        #         render json: @characters
        #     end
        #   end
        
        

    end

    def show
        render json: @character
    end

    def create
        @character = Character.new(character_params)
        if @character.save
            render json: @character
        else
            render error: { error: 'Unable to create User.'}, status: 400
        end
    end

    def update 
        if @character
            @character.update(character_params)
            render json: {message: 'User successfully updated.'}, status: 200
        else
            render json: { error: 'Unable to update Character.'}, status: 400
        end
    end

    def destroy

        if @character
            @character.destroy
            render json: { message: 'Fact successfully deleted.' }, status: 200
        else
            render json: {error: 'Unable to delete fact.'}, status: 400
        end
    end

    def find_character 
        @character = Character.find(params[:id])
    end

    def character_params 
        params.require(:character).permit(:name, :gender, :birthdate, :height, :weight, :home_location)
    end
end


