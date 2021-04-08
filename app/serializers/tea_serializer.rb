class TeaSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :avg_score, :image
  
  has_many :reviews
  has_many :receipts
  has_many :ingredients, through: :receipts
end
