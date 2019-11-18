import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    suuper.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        email: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          type: Sequelize.VIRTUAL
        },
        password_hash: {
          type: Sequelize.STRING,
        }
      }
    )
  }
}
export default User;