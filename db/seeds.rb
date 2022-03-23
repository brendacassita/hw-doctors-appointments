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

phy1 = Physician.create(name: 'ENT')
phy2 = Physician.create(name: 'Orthopedic')
phy3 = Physician.create(name: 'Audiologist')
phy4 = Physician.create(name: 'Primary')
phy5 = Physician.create(name: 'Neurologist')
phy6 = Physician.create(name: 'Dermatologist')
phy7 = Physician.create(name: 'Cardiologist')
phy8 = Physician.create(name: 'OB-GYN')
phy9 = Physician.create(name: 'Pediatrician')
phy10 = Physician.create(name: 'Sports Medicine')


pat1 = Patient.create(name: 'Brenda')
pat2 = Patient.create(name: 'Khai')
pat3 = Patient.create(name: 'Zach')
pat4 = Patient.create(name: 'Brittanie')
pat5 = Patient.create(name: 'Jimmy')
pat6 = Patient.create(name: 'Jasmin')
pat7 = Patient.create(name: 'Taylor')
pat8 = Patient.create(name: 'Cassi')
pat9 = Patient.create(name: 'Jav')
pat10 = Patient.create(name: 'Amari')
pat11 = Patient.create(name: 'Jenn')
pat12 = Patient.create(name: 'Mike')
pat13 = Patient.create(name: 'Jeannie')
pat14 = Patient.create(name: 'Chan')



Appointment.create(physician_id: phy4.id, patient_id: pat1.id, appointment_date: '2023-06-12')
Appointment.create(physician_id: phy2.id, patient_id: pat2.id, appointment_date: '2022-08-01')
Appointment.create(physician_id: phy3.id, patient_id: pat2.id, appointment_date: '2022-11-01')
Appointment.create(physician_id: phy9.id, patient_id: pat2.id, appointment_date: '2022-06-01')
Appointment.create(physician_id: phy3.id, patient_id: pat2.id, appointment_date: '2022-08-11')
Appointment.create(physician_id: phy8.id, patient_id: pat8.id, appointment_date: '2022-06-14')



puts "patient size: #{Patient.all.length}"
puts "physician size: #{Physician.all.length}"
puts "appointment size: #{Appointment.all.length}"

