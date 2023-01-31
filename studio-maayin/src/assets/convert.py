# from PIL import Image
# import math
# image_file = Image.open("studio.jpeg")

# mage_file = image_file.convert('1')
# mage_file.save('greyscale.jpeg')

# thresh = 130
# fn = lambda x : 255 if x > thresh else 0
# r = image_file.convert('L').point(fn, mode='1')
# r.save('result-bw.jpeg')

N, nb = 255, 32
step = N / nb
bins = [round(step*(i)) for i in range(nb)]
bins.append(255)
fn = lambda x: bins[math.floor(x/step)]
# r = image_file.convert('L').point(fn, mode='1')
# r.save('result-thresh.jpeg')

print(list(map(fn, [1, 120, 220, 244, 0])))
