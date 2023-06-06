import signal

def handler(signum, frame):
    # Aquí puedes definir el comportamiento que deseas cuando se reciba la señal
    print("Tarea interrumpida")

def setup_task_handler():
    # Establece el manejador de señales para SIGINT (Ctrl+C)
    signal.signal(signal.SIGINT, handler)

    # También puedes establecer manejadores para otras señales, 
    # signal.signal(signal.SIGTERM, handler)

# Llamada a la función para configurar el manejador de tareas
setup_task_handler()

# Código de ejemplo para una tarea que se ejecuta continuamente
while True:
    try:
        # Coloca aquí tu lógica para la tarea
        pass
    except KeyboardInterrupt:
        # Este bloque se ejecutará cuando se presione Ctrl+C
        print("Tarea finalizada por el usuario")
        break
