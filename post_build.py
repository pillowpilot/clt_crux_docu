import logging
import os

def main():
    logger = logging.getLogger()
    
    if not os.path.exists('clt_crux_arch'):
        os.mkdir('clt_crux_arch')
        
    for file in os.listdir('dist'):
        os.rename(os.path.join('dist', file), os.path.join('clt_crux_arch', file))
        
    os.rename('clt_crux_arch', os.path.join('dist', 'clt_crux_arch'))
    
    logger.info('Moved to clt_crux_arch.')
    
if __name__ == "__main__":
    main()