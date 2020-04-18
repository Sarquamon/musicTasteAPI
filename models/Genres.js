const Sequelize = require("sequelize");
const conn = require("../config/sqlconn");

const Genre = conn.define(
  "T_SPOTIFY_GENRES",
  {
    GENRE_NAME: {
      type: Sequelize.STRING(200),
      primaryKey: true,
    },
    CREATED_AT: {
      type: Sequelize.STRING(19),
      allowNull: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = Genre;
