class User < ApplicationRecord
    has_secure_password
    has_many :transactions, dependent: :destroy
    has_many :drawings, -> { order(name: :asc) }, through: :transactions

    validates_presence_of :username
    validates_uniqueness_of :username, :case_sensitive => false

    def password=(new_password)
        salt = BCrypt::Engine::generate_salt
        hashed = BCrypt::Engine::hash_secret(new_password, salt)
        self.password_digest = salt + hashed
    end

    def authenticate(password)
        salt = password_digest[0..28]
        hashed = BCrypt::Engine::hash_secret(password, salt)
        return nil unless (salt + hashed) == self.password_digest
        return true
    end

    def full_name
        "#{self.first_name} #{self.last_name}"
    end
end
