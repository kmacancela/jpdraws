class Drawing < ApplicationRecord
    has_many :transactions
    has_many :users, through: :transactions

    validates_presence_of :name
    validates_presence_of :img
    validates_uniqueness_of :img
    validates :img, format: { with: %r{gif|jpg|png|jpeg|img}i }
    validates_presence_of :price
end
