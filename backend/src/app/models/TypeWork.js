import Sequelize, { Model } from 'sequelize';

class TypeWork extends Model {
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

        return this;
    }

    static associate(models) {
        this.belongsTo(models.CategoryWork, {
            foreignKey: 'category_id',
            as: 'category',
        });
    }
}

export default TypeWork;
