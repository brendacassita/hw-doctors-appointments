# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Appointment.destroy_all
Physician.destroy_all
Patient.destroy_all

phy1 = Physician.create(name: 'Glickman')
phy2 = Physician.create(name: 'Wilkerson')
phy3 = Physician.create(name: 'Schramm')
phy4 = Physician.create(name: 'Lei')



pat1 = Patient.create(name: 'Brenda')
pat2 = Patient.create(name: 'Cassius')

Appointment.create(physician_id: phy1.id, patient_id: pat1.id, appointment_date: '2023-06-12')
Appointment.create(physician_id: phy2.id, patient_id: pat2.id, appointment_date: '2022-06-01')
Appointment.create(physician_id: phy3.id, patient_id: pat2.id, appointment_date: '2022-08-11')


puts "patient size: #{Patient.all.length}"
puts "physician size: #{Physician.all.length}"
puts "appointment size: #{Appointment.all.length}"

