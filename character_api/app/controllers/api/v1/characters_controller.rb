class Api::V1::CharactersController < ApplicationController

    include ActionController::MimeResponds
    before_action :find_character, only: [:show, :update, :destroy]

    class User
        def initialize()
            @isAdmin = true
        end

        def isAdmin # getter method
            @isAdmin
        end
    end

    @current_user = User.new

    def index

        @characters = Character.all

        render json: @characters

    end

    def show
        render json: @character
    end

    def create

        @current_user = find_user

        if (@current_user.isAdmin)
            
            @character = Character.new(character_params)
            if @character.save
                render json: @character
            else
                render error: { error: 'Unable to create User.'}, status: 400
            end
        end
    end

    def update 
        
        @current_user = find_user

        if (@current_user.isAdmin)

            if @character
                @character.update(character_params)
                render json: {message: 'User successfully updated.'}, status: 200
            else
                render json: { error: 'Unable to update Character.'}, status: 400
            end
        end
    end

    def destroy

        @current_user = find_user

        if (@current_user.isAdmin)
            if @character
                @character.destroy
                render json: { message: 'Fact successfully deleted.' }, status: 200
            else
                render json: {error: 'Unable to delete fact.'}, status: 400
            end
        end
    end

    def find_character 
        @character = Character.find(params[:id])
    end

    def character_params 
        params.require(:character).permit(:name, :gender, :birthdate, :height, :weight, :home_location)
    end

    def find_user
        @user = User.new
    end 
end


