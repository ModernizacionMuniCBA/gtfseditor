from app import *

if __name__ == "__main__":
    application = create_app('production')
    application.run()