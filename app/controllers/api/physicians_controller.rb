class Api::PhysiciansController < ApplicationController
  before_action :set_physician, only: [:show, :destroy, :update]

  def index
    render json: Physician.all
  end

  def show
    render json: @physician
  end

  def destroy
    render json: @physican.destroy
  end

  def create
    @physican = Physician.new(physician_params)
    if(physican.save)
    render json: physican
  else
    render json: {errors: physician.errors.full_messages}, status: 422
  end
end

def update
  if(@physician.update(physician_params))
    render json: @physician
  else
    render json: {errors: @physican.errors.full_messages}, status: 422
  end
end

private
  def set_physician
    @physician = Physician.find(params[:id])
  end

  def physician_params
    params.require(:physician).permit(:name)
  end
end
