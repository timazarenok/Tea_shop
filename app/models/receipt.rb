class Receipt < ApplicationRecord
  belongs_to :tea
  belongs_to :ingredient
end
