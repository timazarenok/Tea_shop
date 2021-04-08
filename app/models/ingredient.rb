class Ingredient < ApplicationRecord
  has_many :receipts
  has_many :teas, through: :receipts
end
