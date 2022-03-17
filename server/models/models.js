const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketBook = sequelize.define('basket_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},

})

const Genre = sequelize.define('genre', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Author = sequelize.define('author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const BookInfo = sequelize.define('book_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, foreignKey: true},
    publishing_house:{type: DataTypes.STRING, allowNull: false},
    language: {type: DataTypes.STRING, allowNull: false},
    year_of_publication: {type: DataTypes.STRING, allowNull: false},
    number_of_pages: {type: DataTypes.INTEGER, allowNull: false}
})
const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    parrentId: { type: DataTypes.INTEGER, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
})

const GenreAuthor = sequelize.define('genre_author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Comment)
Comment.belongsTo(User)

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Genre.hasMany(Book)
Book.belongsTo(Genre)

Book.hasMany(BookInfo)
BookInfo.belongsTo(Book)

Author.hasMany(Book)
Book.belongsTo(Author)

Book.hasMany(Rating)
Rating.belongsTo(Book)

Book.hasMany(Comment)
Comment.belongsTo(Book)

Book.hasMany(BasketBook)
BasketBook.belongsTo(Book)

Genre.belongsToMany(Author, {through: GenreAuthor})
Author.belongsToMany(Genre, {through: GenreAuthor})

module.exports = {
    User,
    Basket,
    BasketBook,
    Book,
    Genre,
    Author,
    Rating,
    GenreAuthor,
    BookInfo
}