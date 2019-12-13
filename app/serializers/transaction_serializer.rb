class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :drawing
  has_one :user
  has_one :drawing
end
