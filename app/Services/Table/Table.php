<?php

namespace App\Services\Table;

use Spatie\QueryBuilder\QueryBuilder;

class Table
{

  /**
   * Allowed filter columns
   *
   * @var array
   */
  private array $allowed_filter_columns = [];

  /**
   * Allowed storing columns
   *
   * @var array
   */
  private array $allowed_sorting_columns = [];

  /**
   * Target Model
   *
   * @var string
   */
  private string $modelClass;

  /**
   * Query builder
   *
   * @var QueryBuilder
   */
  protected QueryBuilder $builder;

  /**
   * Set model
   *
   * @param string $model
   * @return self
   */
  public function model(string $model): self
  {
    $this->modelClass = $model;
    $this->builder = QueryBuilder::for($this->modelClass);
    return $this;
  }

  /**
   * Add filter columns
   *
   * @param array $columns
   * @return self
   */
  public function addFilterColumns(array $columns): self
  {
    $this->builder->addFilterColumns();
    $this->allowed_filter_columns = array_unique(array_merge($this->allowed_filter_columns, $columns));
    return $this;
  }

  /**
   * Add sorting columns
   *
   * @param array $columns
   * @return self
   */
  public function addSortingColumns(array $columns): self
  {
    $this->allowed_sorting_columns = array_unique(array_merge($this->allowed_sorting_columns, $columns));
    return $this;
  }
}
