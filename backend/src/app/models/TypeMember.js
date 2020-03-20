import Sequelize, { Model } from 'sequelize';

class TypeMember extends Model {
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
                description: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    validate: {
                        notNull: false,
                        notEmpty: true,
                    },
                },
            },
            {
                sequelize,
            }
        );
    }
}

export default TypeMember;