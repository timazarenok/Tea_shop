class Tea < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :receipts, dependent: :destroy
  has_many :ingredients, through: :receipts

  has_one_attached :image

  def avg_score
    return 0 unless reviews.count.positive?
    reviews.average(:score).round(2).to_f
  end
end
