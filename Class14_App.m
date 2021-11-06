%Warmup Problem
% Initialize variables
x = linspace(-5*pi, 5*pi, 1000);
y1 = cos(x);
y2 = 2 * sin(x - pi/2);

% Plot the graph with corresponding axis and labels
plot(x, y1, 'k', x, y2, 'g')
ylabel('y1 and y2')
xlabel('x')
title('cos(x) and 2sin(x-pi/2)')
legend('y1', 'y2', 'Location', 'NorthWest')


% Application Problem
% Initialize variables
beforeRevolt = load('CO2_Pre-IR.txt');
afterRevolt = load('CO2_Post-IR.txt');

% Initialize calculation variables
meanBefore = mean(beforeRevolt);
stdBefore = std(beforeRevolt);
maxBefore = max(beforeRevolt);
minBefore = min(beforeRevolt);
meanAfter = mean(afterRevolt);
stdAfter = std(afterRevolt);
maxAfter = max(afterRevolt);
minAfter = min(afterRevolt);

% Output calculations
fprintf('The mean, standard deviation, maximum, and minimum of CO2 levels before the Industrial Revolution are %.2f ppm, %.2f ppm, %.2f ppm, and %.2f ppm, respectively. \n', meanBefore, stdBefore, maxBefore, minBefore)
fprintf('The mean, standard deviation, maximum, and minimum of CO2 levels after the Industrial Revolution are %.2f ppm, %.2f ppm, %.2f ppm, and %.2f ppm, respectively. \n', meanAfter, stdAfter, maxAfter, minAfter)


