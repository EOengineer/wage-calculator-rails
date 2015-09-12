class CreateCompanies < ActiveRecord::Migration
  def change
    create_table :companies do |t|
      t.string :name
      t.integer :employees
      t.integer :ceo_salary
      t.integer :average
      t.integer :minumum

      t.timestamps null: false
    end
  end
end
