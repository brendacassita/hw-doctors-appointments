class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :destroy, :update]

  def all_and_then_some
    render json: Appointment.all_and_then_some
  end

  def index
    render json: Appointment.all
  end

  def show
    appointment = Appointment.find([params[:id]])
    render json: @appointment
  end

  def destroy
    appointment = Appointment.find(params[:id])
    render json: @appointment.destroy
  end 

  def create
    appointment = Appointment.new(appointment_params)
    if (appointment.save)
      render json: appointment
    else
      render json: {error: appointment.errors.full_messages}, status: 422
    end
  end

  def update
    appointment = Appointment.find(params[:id])
    if(appointment.update(appointment_params))
      render json: @appointment
    else
      render json: {error: appointment.errors.full_messages}, status: 422
    end
  end






  private
  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:id, :patient_id, :physician_id, :appointment_date)
  end
end