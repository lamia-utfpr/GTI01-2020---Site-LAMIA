import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Member extends Model {
    static init(sequelize) {
        super.init(
            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                password_hash: Sequelize.STRING,
                password: {
                    type: Sequelize.VIRTUAL,
                    allowNull: false,
                    unique: false,
                    validate: {
                        notNull: true,
                        notEmpty: true,
                    },
                },
                phone: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: false,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                likendin: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: false,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                git_hub: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: false,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
                lattes: {
                    type: Sequelize.STRING,
                    allowNull: true,
                    unique: false,
                    validate: {
                        notNull: false,
                        notEmpty: false,
                    },
                },
            },
            {
                sequelize,
            }
        );

        this.addHook('beforeSave', async user => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8);
            }
        });

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Picture, {
            foreignKey: 'avatar_id',
            as: 'avatar',
        });
        this.belongsTo(models.TypeMember, {
            foreignKey: 'office_id',
            as: 'office',
        });
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash);
    }
}

export default Member;