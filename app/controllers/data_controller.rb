class DataController < ApplicationController
  respond_to :json

  DAYS_PERIOD = 60

  def heartrate
    respond { random.rand(60..110) }
  end

  def activity
    respond_with([
      {
        name: 'Running',
        data: generate { random.rand(0..5) }
      },
      {
        name: 'Cycling',
        data: generate { random.rand(0..15) }
      },
      {
        name: 'Swimming',
        data: generate { random.rand(0..3) }
      }
    ])
  end

  def calories
    respond { random.rand(2000..4000) }
  end

  private

    def random
      @random ||= Random.new
    end

    def generate(&block)
      data = []
      DAYS_PERIOD.downto(1) do |i|
        data << [i.days.ago, block.call]
      end
      data
    end

    def respond(&block)
      respond_with(generate(&block))
    end
end
