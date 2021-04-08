class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :score, :description, :tea_id
end
