class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name

  has_many :receipts
  has_many :teas, through: :receipts
end
