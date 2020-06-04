"""empty message

Revision ID: 3f1fe36deab4
Revises: 869ceeca2110
Create Date: 2020-05-29 13:47:26.688118

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '3f1fe36deab4'
down_revision = '869ceeca2110'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('id_', sa.BigInteger(), nullable=False))
    op.drop_index('ix_users_name_test', table_name='users')
    op.drop_constraint('users_id_key', 'users', type_='unique')
    op.create_unique_constraint(None, 'users', ['id_'])
    op.drop_column('users', 'name_test')
    op.drop_column('users', 'id')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False))
    op.add_column('users', sa.Column('name_test', sa.VARCHAR(length=64), autoincrement=False, nullable=True))
    op.drop_constraint(None, 'users', type_='unique')
    op.create_unique_constraint('users_id_key', 'users', ['id'])
    op.create_index('ix_users_name_test', 'users', ['name_test'], unique=True)
    op.drop_column('users', 'id_')
    # ### end Alembic commands ###