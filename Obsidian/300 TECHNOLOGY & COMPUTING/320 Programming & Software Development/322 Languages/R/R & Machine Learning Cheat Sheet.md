
tags: [[R]], [[Programming language]], [[Cheat sheet]],[[Machine Learning]], [[Data Science]]

---
# 📊 R/RStudio Cheat Sheet for Data Science & Machine Learning

## 🚀 Core R Programming

### 1. Workspace & Environment

|Command|Description|
|---|---|
|`getwd()`, `setwd("path")`|Get/set working directory|
|`ls()`, `rm(object)`|List/remove objects|
|`str(object)`|Display structure of object|
|`class(object)`, `typeof(object)`|Check object type|
|`summary(object)`|Statistical summary|
|`head(df, n=5)`, `tail(df)`|View first/last rows|
|`names(df)`, `colnames(df)`|Get column names|
|`dim(df)`, `nrow(df)`, `ncol(df)`|Dimensions of data|
|`saveRDS(object, "file.rds")`|Save single object|
|`readRDS("file.rds")`|Read RDS file|
|`save.image("workspace.RData")`|Save entire workspace|

### 2. Data Import/Export

|Function|Package|Description|
|---|---|---|
|`read.csv()`, `write.csv()`|base|CSV files|
|`read.table()`, `write.table()`|base|Tabular data|
|`read_excel()`, `write_excel()`|readxl|Excel files|
|`fread()`, `fwrite()`|data.table|Fast I/O|
|`read_csv()`, `write_csv()`|readr|Tidyverse CSV|
|`read_sql()`, `dbWriteTable()`|DBI/RSQLite|Database|

### 3. Data Manipulation

#### **Base R**

```r

# Subsetting
df[rows, cols]                    # Matrix-style indexing
df$column                         # Extract column
subset(df, condition)             # Subset with condition

# Transformations
transform(df, new_col = expr)     # Add/modify columns
merge(df1, df2, by="key")         # Join dataframes
aggregate(x ~ group, df, FUN)     # Aggregation
```
#### **dplyr (tidyverse)**
```r

library(dplyr)
df %>% 
  filter(condition) %>%           # Filter rows
  select(columns) %>%             # Select columns
  mutate(new_col = expr) %>%      # Create new columns
  arrange(column) %>%             # Sort
  group_by(group_col) %>%         # Group for aggregation
  summarise(mean = mean(x)) %>%   # Summarize groups
  left_join(df2, by="key")        # Join operations
```
#### **data.table**
```r

library(data.table)
setDT(df)                         # Convert to data.table
df[condition, .(new = mean(x)), by=group]  # Fast operations
```
### 4. Data Cleaning

```r

# Missing values
is.na(x), complete.cases(df)      # Check NA
na.omit(df)                       # Remove rows with NA
df[is.na(df)] <- value            # Replace NA
mean(x, na.rm=TRUE)               # Ignore NA in calculations

# Type conversions
as.numeric(), as.character()      # Type casting
as.Date(), as.POSIXct()           # Date/time
factor(x, levels=c())             # Create factors

# String manipulation (stringr)
library(stringr)
str_detect(x, pattern)            # Pattern matching
str_replace(x, pattern, replace)  # Replace text
str_split(x, pattern)             # Split strings
str_trim(x)                       # Remove whitespace
```
### 5. Visualization

#### **ggplot2**

```r

library(ggplot2)
ggplot(data, aes(x, y, color=group)) +
  geom_point() +                  # Scatter plot
  geom_line() +                   # Line plot
  geom_bar(stat="identity") +     # Bar plot
  geom_histogram(bins=30) +       # Histogram
  geom_boxplot() +                # Boxplot
  geom_density() +                # Density plot
  facet_wrap(~variable) +         # Multi-panel
  labs(title="Title") +           # Labels
  theme_minimal()                 # Themes
```
#### **Base Graphics**

```r

plot(x, y, type="l")              # Line plot
hist(x, breaks=30)                # Histogram
boxplot(x ~ group)                # Boxplot
barplot(values)                   # Bar plot
par(mfrow=c(2,2))                 # Multi-plot layout
```
## Machine Learning in R

### 1. Data Preparation

```r

# Train-test split
set.seed(123)
split <- sample.split(df$target, SplitRatio=0.7)
train <- subset(df, split==TRUE)
test <- subset(df, split==FALSE)

# Feature scaling
scale_features <- function(x) {
  (x - mean(x)) / sd(x)
}

# One-hot encoding
library(caret)
dummy <- dummyVars(~ ., data=df)
df_encoded <- predict(dummy, newdata=df)
```
### 2. Model Training & Evaluation Framework

```r

# Cross-validation setup
library(caret)
train_control <- trainControl(
  method = "cv",
  number = 10,
  savePredictions = TRUE,
  classProbs = TRUE
)

# Model metrics
confusionMatrix(pred, actual)     # Classification metrics
RMSE(pred, actual)                # Regression error
ROC::roc(actual, prob)            # ROC curve
```
### 3. Supervised Learning Algorithms

#### **Linear Models**
```r

# Linear Regression
lm_model <- lm(target ~ ., data=train)
summary(lm_model)
predict(lm_model, newdata=test)

# Logistic Regression
glm_model <- glm(target ~ ., data=train, family="binomial")
predict(glm_model, newdata=test, type="response")

# Regularized Regression (glmnet)
library(glmnet)
x <- model.matrix(target ~ ., data=train)[,-1]
y <- train$target
cv_model <- cv.glmnet(x, y, alpha=1)  # alpha=1 (lasso), 0 (ridge)
predict(cv_model, newx=test_matrix)
```
#### **Tree-Based Models**
```r

# Decision Trees (rpart)
library(rpart)
tree_model <- rpart(target ~ ., data=train, method="class")
rpart.plot::rpart.plot(tree_model)

# Random Forest
library(randomForest)
rf_model <- randomForest(target ~ ., data=train, ntree=500, importance=TRUE)
varImpPlot(rf_model)

# XGBoost (Extreme Gradient Boosting)
library(xgboost)
dtrain <- xgb.DMatrix(data=as.matrix(train[,-target_idx]), label=train$target)
xgb_model <- xgb.train(data=dtrain, nrounds=100, objective="binary:logistic")
```
#### **Support Vector Machines**
```r

library(e1071)
svm_model <- svm(target ~ ., data=train, kernel="radial", probability=TRUE)
predict(svm_model, newdata=test, probability=TRUE)
```
#### **K-Nearest Neighbors**

```r

library(class)
# Scale features first
train_scaled <- scale(train[,-target_idx])
test_scaled <- scale(test[,-target_idx])
knn_pred <- knn(train_scaled, test_scaled, train$target, k=5)
```
### 4. Unsupervised Learning

#### **Clustering**

```r

# K-Means
kmeans_model <- kmeans(scaled_data, centers=3, nstart=25)
fviz_cluster(kmeans_model, data=scaled_data)  # factoextra package

# Hierarchical Clustering
dist_matrix <- dist(scaled_data)
hc_model <- hclust(dist_matrix, method="ward.D2")
plot(hc_model)
cutree(hc_model, k=3)

# DBSCAN
library(dbscan)
dbscan_model <- dbscan(scaled_data, eps=0.5, minPts=5)
```
#### **Dimensionality Reduction**

```r

# PCA
pca_model <- prcomp(scaled_data, center=TRUE, scale.=TRUE)
summary(pca_model)
biplot(pca_model)
fviz_pca_biplot(pca_model)  # factoextra

# t-SNE
library(Rtsne)
tsne_model <- Rtsne(scaled_data, perplexity=30, dims=2)
plot(tsne_model$Y)

# UMAP
library(umap)
umap_model <- umap(scaled_data)
plot(umap_model$layout)
````
### 5. Model Evaluation & Validation
```r

# Regression metrics
library(Metrics)
rmse(pred, actual)
mae(pred, actual)
r2 <- function(pred, actual) {
  1 - sum((actual - pred)^2) / sum((actual - mean(actual))^2)
}

# Classification metrics
library(caret)
conf_matrix <- confusionMatrix(pred, actual)
conf_matrix$overall['Accuracy']
conf_matrix$byClass['F1']  # F1-score

# ROC Curve
library(pROC)
roc_obj <- roc(actual, prob)
plot(roc_obj)
auc(roc_obj)

# Cross-validation
library(caret)
train_control <- trainControl(method="repeatedcv", number=10, repeats=3)
cv_model <- train(target ~ ., data=df, method="rf", trControl=train_control)
```
### 6. Hyperparameter Tuning
```r

# Grid search
library(caret)
tune_grid <- expand.grid(
  mtry = c(2, 4, 6),
  splitrule = "gini",
  min.node.size = c(1, 5, 10)
)

tuned_model <- train(
  target ~ .,
  data = train,
  method = "ranger",
  tuneGrid = tune_grid,
  trControl = trainControl(method="cv", number=5)
)

# Random search
library(mlr)
tune_ps <- makeParamSet(
  makeIntegerParam("maxdepth", lower=3, upper=10),
  makeNumericParam("eta", lower=0.01, upper=0.3)
)
tune_control <- makeTuneControlRandom(maxit=50)
```
## Essential Packages

```r

# Data manipulation
install.packages(c("dplyr", "tidyr", "data.table"))

# Visualization
install.packages(c("ggplot2", "plotly", "ggpubr", "corrplot"))

# Machine learning
install.packages(c("caret", "mlr", "randomForest", "xgboost", "glmnet"))

# Model interpretation
install.packages(c("DALEX", "shap", "iml", "vip"))

# Time series
install.packages(c("forecast", "prophet", "tseries"))

# Text mining
install.packages(c("tm", "text2vec", "wordcloud"))

# Parallel processing
install.packages(c("parallel", "doParallel", "future"))
```

## Best Practices

```r

# 1. Always set seed for reproducibility
set.seed(123)

# 2. Use pipes for readable code
library(magrittr)
result <- df %>%
  filter(x > 0) %>%
  group_by(category) %>%
  summarise(mean = mean(value)) %>%
  arrange(desc(mean))

# 3. Profile code for performance
Rprof()
# Your code here
Rprof(NULL)
summaryRprof()

# 4. Write functions for reusable code
preprocess_data <- function(df) {
  df %>%
    mutate_all(~ifelse(is.na(.), median(., na.rm=TRUE), .)) %>%
    mutate_all(scale_features)
}

# 5. Use version control with git
# Create .gitignore with: *.RData, *.Rhistory, .Rproj.user/`
```

## 🔧 RStudio Shortcuts

- **Ctrl+Enter**: Run current line/selection
    
- **Ctrl+Shift+M**: Pipe operator `%>%`
    
- **Ctrl+Shift+C**: Comment/uncomment
    
- **Alt+-**: Assignment operator `<-`
    
- **Ctrl+Shift+F10**: Restart R session
    
- **Ctrl+Shift+Enter**: Run entire script
    
- **Ctrl+Shift+N**: New script
    
- **Ctrl+1**: Move focus to source editor
    
- **Ctrl+2**: Move focus to console