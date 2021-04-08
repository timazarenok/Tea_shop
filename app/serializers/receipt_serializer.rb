class ReceiptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :tea_id, :ingredient_id
end
