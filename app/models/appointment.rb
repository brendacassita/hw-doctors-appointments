class Appointment < ApplicationRecord
  belongs_to :physician
  belongs_to :patient


  def self.all_and_then_some
    appointments = self.all
    return appointments.map do |appointment|
      {id: appointment.id, physician: appointment.physician, patient: appointment.patient}
    
    # binding.pry
    end
  end
end