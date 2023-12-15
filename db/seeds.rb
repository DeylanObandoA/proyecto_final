# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Institution.create([{name: 'Universidad XYZ', insti_type: 'University'},
#   {name: 'Escuela ABC', insti_type: 'School'},
#   {name: 'Instituto 123', insti_type: 'Institute'},
#   {name: 'Colegio Z', insti_type: 'College'}])

  # Course.create(name: "curso de ingles", description: "introduccion al idioma con un curso de nivel A1",
  # registration_day: Time.now, requirement: "ninguno", favorite: false, institutions_id: 1)

# Course.create([{
#   name: 'Curso de Matemáticas',
#   description: 'Introducción a los conceptos básicos de matemáticas.',
#   registration_day: Time.now,
#   requirement: 'Ninguno',
#   favorite: true,
# },
# {
#   name: 'Curso de Programación en Ruby',
#   description: 'Aprende a programar en Ruby desde cero.',
#   registration_day: Time.now,
#   requirement: 'Conocimientos básicos de programación',
#   favorite: false,
# },
# {  
#     name: 'Curso de Historia del Arte',
#     description: 'Exploración de diferentes períodos artísticos a lo largo de la historia.',
#     registration_day: Time.now,
#     requirement: 'Ninguno',
#     favorite: true,
# },
# {
#     name: 'Curso de Ciencias de la Computación',
#     description: 'Conceptos avanzados de ciencias de la computación y desarrollo de software.',
#     registration_day: Time.now,
#     requirement: 'Conocimientos previos en programación',
#     favorite: false,
# }])


# Address.create([
# {
#     province: 'Puntarenas',
#     canton: 'Puntarenas',
#     district: 'Puntarenas',
#     neighborhood: 'El Puerto'
# },
# {
#     province: 'Puntarenas',
#     canton: 'Quepos',
#     district: 'Manuel Antonio',
#     neighborhood: 'Playa Espadilla'
# },
# {
#     province: 'Heredia',
#     canton: 'Heredia',
#     district: 'Heredia',
#     neighborhood: 'Centro'
# },
# {
#     province: 'Alajuela',
#     canton: 'Alajuela',
#     district: 'San Rafael',
#     neighborhood: 'El Coyol'
# },
# {
#     province: 'Puntarenas',
#     canton: 'Garabito',
#     district: 'Jaco',
#     neighborhood: 'Playa Hermosa'
# },
# {
#     province: 'Puntarenas',
#     canton: 'Esparza',
#     district: 'Esparza',
#     neighborhood: 'Barrio Nuevo'
# }])


# Branch.create(address_id: 1, course_id: 1, name: 'Rodrigo facio')
# Branch.create(address_id: 4, course_id: 2, name: 'Santa Lucia')
# Branch.create(address_id: 3, course_id: 3, name: 'Ocidene')
# Branch.create(address_id: 1, course_id: 4, name: 'Tobias Vargas')

# User.create(name: "deylan", age: 18, email: "deylan@gmail.com", password: 123456)


CategoryCourse.create(course_id: 3, category_id: 1 )