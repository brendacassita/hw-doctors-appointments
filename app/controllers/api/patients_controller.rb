class Api::PatientsController < ApplicationController
before_action :set_patient, only: [:show, :destroy, :update]

  def index
    render json: Patient.all
  end

  def show
    render json: @patient
  end

  def destroy
    render json: @patient.destroy
  end

  def create
    patient = Patient.new(patient_params)
    if(patient.save)
      render json: patient
    else
      render json: {errors: patient.errors.full_messages}, status: 422
    end
  end

  def update
    if(@patient.update(patient_params))
    render json: @patient
  else
    render json: {errors: @patient.errors.full_messages}, status: 422
  end
end
      
  private
  def set_patient
    @patient = Patient.find(params[:id])
  end

  def patient_params
    params.require(:patient).permit(:name)
  end
end
