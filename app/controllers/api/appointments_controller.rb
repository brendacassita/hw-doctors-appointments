class Api::AppointmentsController < ApplicationController
  

  def all_and_then_some
    render json: Appointment.all_and_then_some
  end

  def index
    render json: Appointment.all
  end
end