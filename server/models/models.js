const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, foreignKey: true},
})

const BasketBook = sequelize.define('basket_book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
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
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, foreignKey: true},
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
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, foreignKey: true},
    parrentId: { type: DataTypes.INTEGER, allowNull: false },
    text: { type: DataTypes.STRING, allowNull: false },
})

const GenreAuthor = sequelize.define('genre_author', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating, { as: "rating", foreignKey: "userId" })
Rating.belongsTo(User, { as: "user", foreignKey: "userId" })

User.hasMany(Comment, { as: "comment", foreignKey: "userId" })
Comment.belongsTo(User, { as: "user", foreignKey: "userId" })

Basket.hasMany(BasketBook)
BasketBook.belongsTo(Basket)

Genre.hasMany(Book, { foreignKey: "genreId" })
Book.belongsTo(Genre, { as: "genre", foreignKey: "genreId" })

Book.hasMany(BookInfo)
BookInfo.belongsTo(Book, { as: "book", foreignKey: "bookId" })

Author.hasMany(Book, { foreignKey: "authorId" })
Book.belongsTo(Author, { as: "author", foreignKey: "authorId" })

Book.hasMany(Rating, { as: "rating", foreignKey: "bookId" })
Rating.belongsTo(Book)

Book.hasMany(Comment, { as: "comment", foreignKey: "bookId" })
Comment.belongsTo(Book, { as: "book", foreignKey: "bookId" })

Book.hasMany(BasketBook)
BasketBook.belongsTo(Book)

Genre.belongsToMany(Author, {through: GenreAuthor})
Author.belongsToMany(Genre, {through: GenreAuthor})
Comment.belongsTo(Comment,{as: "parrent", foreignKey: "parrentId"})

module.exports = {
    User,
    Basket,
    BasketBook,
    Book,
    Genre,
    Author,
    Rating,
    GenreAuthor,
    BookInfo,
    Comment
}