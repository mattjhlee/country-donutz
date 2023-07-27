"""fill out models

Revision ID: 15db49d85e47
Revises: 
Create Date: 2023-07-26 12:36:11.411425

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '15db49d85e47'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('adminusers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=True),
    sa.Column('password', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('menuitems',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('type', sa.String(), nullable=True),
    sa.Column('price', sa.Float(), nullable=True),
    sa.Column('img', sa.String(), nullable=True),
    sa.Column('body', sa.String(), nullable=True),
    sa.Column('visible', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('sitechanges',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('action', sa.String(), nullable=True),
    sa.Column('created_at', sa.String(), nullable=True),
    sa.Column('adminUser_id', sa.Integer(), nullable=True),
    sa.Column('menuItem_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['adminUser_id'], ['adminusers.id'], name=op.f('fk_sitechanges_adminUser_id_adminusers')),
    sa.ForeignKeyConstraint(['menuItem_id'], ['menuitems.id'], name=op.f('fk_sitechanges_menuItem_id_menuitems')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('specialorders',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('quantity', sa.Integer(), nullable=True),
    sa.Column('addinfo', sa.String(), nullable=True),
    sa.Column('created_at', sa.String(), nullable=True),
    sa.Column('completed', sa.String(), nullable=True),
    sa.Column('menuItem_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['menuItem_id'], ['menuitems.id'], name=op.f('fk_specialorders_menuItem_id_menuitems')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('specialorders')
    op.drop_table('sitechanges')
    op.drop_table('menuitems')
    op.drop_table('adminusers')
    # ### end Alembic commands ###